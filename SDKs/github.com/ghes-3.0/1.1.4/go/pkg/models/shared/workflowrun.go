package shared

import (
"time")

type WorkflowRunSimpleCommitAuthor struct {
    Email string `json:"email"`
    Name string `json:"name"`
    
}

type WorkflowRunSimpleCommitCommitter struct {
    Email string `json:"email"`
    Name string `json:"name"`
    
}

type WorkflowRunSimpleCommit struct {
    Author WorkflowRunSimpleCommitAuthor `json:"author"`
    Committer WorkflowRunSimpleCommitCommitter `json:"committer"`
    ID string `json:"id"`
    Message string `json:"message"`
    Timestamp time.Time `json:"timestamp"`
    TreeID string `json:"tree_id"`
    
}

type WorkflowRun struct {
    ArtifactsURL string `json:"artifacts_url"`
    CancelURL string `json:"cancel_url"`
    CheckSuiteID *int64 `json:"check_suite_id,omitempty"`
    CheckSuiteNodeID *string `json:"check_suite_node_id,omitempty"`
    CheckSuiteURL string `json:"check_suite_url"`
    Conclusion string `json:"conclusion"`
    CreatedAt time.Time `json:"created_at"`
    Event string `json:"event"`
    HeadBranch string `json:"head_branch"`
    HeadCommit WorkflowRunSimpleCommit `json:"head_commit"`
    HeadRepository MinimalRepository `json:"head_repository"`
    HeadRepositoryID *int64 `json:"head_repository_id,omitempty"`
    HeadSha string `json:"head_sha"`
    HTMLURL string `json:"html_url"`
    ID int64 `json:"id"`
    JobsURL string `json:"jobs_url"`
    LogsURL string `json:"logs_url"`
    Name *string `json:"name,omitempty"`
    NodeID string `json:"node_id"`
    PullRequests []PullRequestMinimal `json:"pull_requests"`
    Repository MinimalRepository `json:"repository"`
    RerunURL string `json:"rerun_url"`
    RunNumber int64 `json:"run_number"`
    Status string `json:"status"`
    UpdatedAt time.Time `json:"updated_at"`
    URL string `json:"url"`
    WorkflowID int64 `json:"workflow_id"`
    WorkflowURL string `json:"workflow_url"`
    
}

