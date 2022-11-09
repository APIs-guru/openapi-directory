import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutDataLakeSettingsXAmzTargetEnum {
    AwsLakeFormationPutDataLakeSettings = "AWSLakeFormation.PutDataLakeSettings"
}


export class PutDataLakeSettingsHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutDataLakeSettingsXAmzTargetEnum;
}


export class PutDataLakeSettingsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutDataLakeSettingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutDataLakeSettingsRequest;
}


export class PutDataLakeSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  putDataLakeSettingsResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
