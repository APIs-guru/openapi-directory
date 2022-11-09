import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListStreamsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ExclusiveStartStreamName" })
  exclusiveStartStreamName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;
}

export enum ListStreamsXAmzTargetEnum {
    Kinesis20131202ListStreams = "Kinesis_20131202.ListStreams"
}


export class ListStreamsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListStreamsXAmzTargetEnum;
}


export class ListStreamsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListStreamsQueryParams;

  @Metadata()
  headers: ListStreamsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListStreamsInput;
}


export class ListStreamsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  listStreamsOutput?: shared.ListStreamsOutput;

  @Metadata()
  statusCode: number;
}
