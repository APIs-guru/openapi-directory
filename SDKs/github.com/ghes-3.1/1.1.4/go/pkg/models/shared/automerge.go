package shared




type AutoMergeMergeMethodEnum string

const (
    AutoMergeMergeMethodEnumMerge AutoMergeMergeMethodEnum = "merge"
AutoMergeMergeMethodEnumSquash AutoMergeMergeMethodEnum = "squash"
AutoMergeMergeMethodEnumRebase AutoMergeMergeMethodEnum = "rebase"
)


type AutoMerge struct {
    CommitMessage string `json:"commit_message"`
    CommitTitle string `json:"commit_title"`
    EnabledBy SimpleUser `json:"enabled_by"`
    MergeMethod AutoMergeMergeMethodEnum `json:"merge_method"`
    
}

