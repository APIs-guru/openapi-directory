import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutInventoryXAmzTargetEnum {
    AmazonSsmPutInventory = "AmazonSSM.PutInventory"
}


export class PutInventoryHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: PutInventoryXAmzTargetEnum;
}


export class PutInventoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutInventoryHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutInventoryRequest;
}


export class PutInventoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customSchemaCountLimitExceededException?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidInstanceId?: any;

  @SpeakeasyMetadata()
  invalidInventoryItemContextException?: any;

  @SpeakeasyMetadata()
  invalidItemContentException?: any;

  @SpeakeasyMetadata()
  invalidTypeNameException?: any;

  @SpeakeasyMetadata()
  itemContentMismatchException?: any;

  @SpeakeasyMetadata()
  itemSizeLimitExceededException?: any;

  @SpeakeasyMetadata()
  putInventoryResult?: shared.PutInventoryResult;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subTypeCountLimitExceededException?: any;

  @SpeakeasyMetadata()
  totalSizeLimitExceededException?: any;

  @SpeakeasyMetadata()
  unsupportedInventoryItemContextException?: any;

  @SpeakeasyMetadata()
  unsupportedInventorySchemaVersionException?: any;
}
