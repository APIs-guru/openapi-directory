import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin" })
  admin?: boolean;

  @Metadata({ data: "json, name=all_emails" })
  allEmails?: string[];

  @Metadata({ data: "json, name=analytics_id" })
  analyticsId?: string;

  @Metadata({ data: "json, name=avatar_url" })
  avatarUrl?: string;

  @Metadata({ data: "json, name=basic_email_prefs" })
  basicEmailPrefs?: string;

  @Metadata({ data: "json, name=bitbucket" })
  bitbucket?: number;

  @Metadata({ data: "json, name=bitbucket_authorized" })
  bitbucketAuthorized?: boolean;

  @Metadata({ data: "json, name=containers" })
  containers?: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=days_left_in_trial" })
  daysLeftInTrial?: number;

  @Metadata({ data: "json, name=dev_admin" })
  devAdmin?: boolean;

  @Metadata({ data: "json, name=enrolled_betas" })
  enrolledBetas?: string[];

  @Metadata({ data: "json, name=github_id" })
  githubId?: number;

  @Metadata({ data: "json, name=github_oauth_scopes" })
  githubOauthScopes?: string[];

  @Metadata({ data: "json, name=gravatar_id" })
  gravatarId?: number;

  @Metadata({ data: "json, name=heroku_api_key" })
  herokuApiKey?: string;

  @Metadata({ data: "json, name=in_beta_program" })
  inBetaProgram?: boolean;

  @Metadata({ data: "json, name=login" })
  login?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=organization_prefs" })
  organizationPrefs?: Map<string, any>;

  @Metadata({ data: "json, name=parallelism" })
  parallelism?: number;

  @Metadata({ data: "json, name=plan" })
  plan?: string;

  @Metadata({ data: "json, name=projects" })
  projects?: Map<string, any>;

  @Metadata({ data: "json, name=pusher_id" })
  pusherId?: string;

  @Metadata({ data: "json, name=selected_email" })
  selectedEmail?: string;

  @Metadata({ data: "json, name=sign_in_count" })
  signInCount?: number;

  @Metadata({ data: "json, name=trial_end" })
  trialEnd?: Date;
}
