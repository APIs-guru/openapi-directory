import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetCalendarStateXAmzTargetEnum {
    AmazonSsmGetCalendarState = "AmazonSSM.GetCalendarState"
}


export class GetCalendarStateHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetCalendarStateXAmzTargetEnum;
}


export class GetCalendarStateRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetCalendarStateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetCalendarStateRequest;
}


export class GetCalendarStateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCalendarStateResponse?: shared.GetCalendarStateResponse;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidDocument?: any;

  @Metadata()
  invalidDocumentType?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedCalendarException?: any;
}
