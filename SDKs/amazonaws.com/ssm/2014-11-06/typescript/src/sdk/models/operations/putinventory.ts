import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutInventoryXAmzTargetEnum {
    AmazonSsmPutInventory = "AmazonSSM.PutInventory"
}


export class PutInventoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutInventoryXAmzTargetEnum;
}


export class PutInventoryRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutInventoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutInventoryRequest;
}


export class PutInventoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customSchemaCountLimitExceededException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidInstanceId?: any;

  @Metadata()
  invalidInventoryItemContextException?: any;

  @Metadata()
  invalidItemContentException?: any;

  @Metadata()
  invalidTypeNameException?: any;

  @Metadata()
  itemContentMismatchException?: any;

  @Metadata()
  itemSizeLimitExceededException?: any;

  @Metadata()
  putInventoryResult?: shared.PutInventoryResult;

  @Metadata()
  statusCode: number;

  @Metadata()
  subTypeCountLimitExceededException?: any;

  @Metadata()
  totalSizeLimitExceededException?: any;

  @Metadata()
  unsupportedInventoryItemContextException?: any;

  @Metadata()
  unsupportedInventorySchemaVersionException?: any;
}
