import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommunityProfileFilesCodeOfConductSimple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class CommunityProfileFilesCommunityHealthFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class CommunityProfileFilesLicenseSimple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=spdx_id" })
  spdxId: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class CommunityProfileFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code_of_conduct" })
  codeOfConduct: CommunityProfileFilesCodeOfConductSimple;

  @SpeakeasyMetadata({ data: "json, name=contributing" })
  contributing: CommunityProfileFilesCommunityHealthFile;

  @SpeakeasyMetadata({ data: "json, name=issue_template" })
  issueTemplate: CommunityProfileFilesCommunityHealthFile;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license: CommunityProfileFilesLicenseSimple;

  @SpeakeasyMetadata({ data: "json, name=pull_request_template" })
  pullRequestTemplate: CommunityProfileFilesCommunityHealthFile;

  @SpeakeasyMetadata({ data: "json, name=readme" })
  readme: CommunityProfileFilesCommunityHealthFile;
}


// CommunityProfile
/** 
 * Community Profile
**/
export class CommunityProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_reports_enabled" })
  contentReportsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=documentation" })
  documentation: string;

  @SpeakeasyMetadata({ data: "json, name=files" })
  files: CommunityProfileFiles;

  @SpeakeasyMetadata({ data: "json, name=health_percentage" })
  healthPercentage: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}
