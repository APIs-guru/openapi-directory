import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CommunityProfileFilesCodeOfConductSimple extends SpeakeasyBase {
  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class CommunityProfileFilesCommunityHealthFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class CommunityProfileFilesLicenseSimple extends SpeakeasyBase {
  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=spdx_id" })
  spdxId: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class CommunityProfileFiles extends SpeakeasyBase {
  @Metadata({ data: "json, name=code_of_conduct" })
  codeOfConduct: CommunityProfileFilesCodeOfConductSimple;

  @Metadata({ data: "json, name=contributing" })
  contributing: CommunityProfileFilesCommunityHealthFile;

  @Metadata({ data: "json, name=issue_template" })
  issueTemplate: CommunityProfileFilesCommunityHealthFile;

  @Metadata({ data: "json, name=license" })
  license: CommunityProfileFilesLicenseSimple;

  @Metadata({ data: "json, name=pull_request_template" })
  pullRequestTemplate: CommunityProfileFilesCommunityHealthFile;

  @Metadata({ data: "json, name=readme" })
  readme: CommunityProfileFilesCommunityHealthFile;
}


// CommunityProfile
/** 
 * Community Profile
**/
export class CommunityProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_reports_enabled" })
  contentReportsEnabled?: boolean;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=documentation" })
  documentation: string;

  @Metadata({ data: "json, name=files" })
  files: CommunityProfileFiles;

  @Metadata({ data: "json, name=health_percentage" })
  healthPercentage: number;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}
