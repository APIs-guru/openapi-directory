import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListCompatibleImagesXAmzTargetEnum {
    AwsieSnowballJobManagementServiceListCompatibleImages = "AWSIESnowballJobManagementService.ListCompatibleImages"
}


export class ListCompatibleImagesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListCompatibleImagesXAmzTargetEnum;
}


export class ListCompatibleImagesRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListCompatibleImagesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListCompatibleImagesRequest;
}


export class ListCompatibleImagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ec2RequestFailedException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listCompatibleImagesResult?: shared.ListCompatibleImagesResult;

  @Metadata()
  statusCode: number;
}
