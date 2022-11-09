import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeCampaignXAmzTargetEnum {
    AmazonPersonalizeDescribeCampaign = "AmazonPersonalize.DescribeCampaign"
}


export class DescribeCampaignHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DescribeCampaignXAmzTargetEnum;
}


export class DescribeCampaignRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeCampaignHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeCampaignRequest;
}


export class DescribeCampaignResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeCampaignResponse?: shared.DescribeCampaignResponse;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
