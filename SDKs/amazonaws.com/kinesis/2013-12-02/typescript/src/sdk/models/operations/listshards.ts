import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListShardsXAmzTargetEnum {
    Kinesis20131202ListShards = "Kinesis_20131202.ListShards"
}


export class ListShardsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListShardsXAmzTargetEnum;
}


export class ListShardsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListShardsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListShardsInput;
}


export class ListShardsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  expiredNextTokenException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  listShardsOutput?: shared.ListShardsOutput;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
