import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeSeverityLevelsXAmzTargetEnum {
    AwsSupport20130415DescribeSeverityLevels = "AWSSupport_20130415.DescribeSeverityLevels"
}


export class DescribeSeverityLevelsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeSeverityLevelsXAmzTargetEnum;
}


export class DescribeSeverityLevelsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeSeverityLevelsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeSeverityLevelsRequest;
}


export class DescribeSeverityLevelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeSeverityLevelsResponse?: shared.DescribeSeverityLevelsResponse;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
