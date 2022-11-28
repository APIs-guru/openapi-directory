import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=all_emails" })
  allEmails?: string[];

  @SpeakeasyMetadata({ data: "json, name=analytics_id" })
  analyticsId?: string;

  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=basic_email_prefs" })
  basicEmailPrefs?: string;

  @SpeakeasyMetadata({ data: "json, name=bitbucket" })
  bitbucket?: number;

  @SpeakeasyMetadata({ data: "json, name=bitbucket_authorized" })
  bitbucketAuthorized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=containers" })
  containers?: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=days_left_in_trial" })
  daysLeftInTrial?: number;

  @SpeakeasyMetadata({ data: "json, name=dev_admin" })
  devAdmin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enrolled_betas" })
  enrolledBetas?: string[];

  @SpeakeasyMetadata({ data: "json, name=github_id" })
  githubId?: number;

  @SpeakeasyMetadata({ data: "json, name=github_oauth_scopes" })
  githubOauthScopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=gravatar_id" })
  gravatarId?: number;

  @SpeakeasyMetadata({ data: "json, name=heroku_api_key" })
  herokuApiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=in_beta_program" })
  inBetaProgram?: boolean;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_prefs" })
  organizationPrefs?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=parallelism" })
  parallelism?: number;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan?: string;

  @SpeakeasyMetadata({ data: "json, name=projects" })
  projects?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=pusher_id" })
  pusherId?: string;

  @SpeakeasyMetadata({ data: "json, name=selected_email" })
  selectedEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=sign_in_count" })
  signInCount?: number;

  @SpeakeasyMetadata({ data: "json, name=trial_end" })
  trialEnd?: Date;
}
