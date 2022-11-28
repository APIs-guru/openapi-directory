import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutComplianceItemsXAmzTargetEnum {
    AmazonSsmPutComplianceItems = "AmazonSSM.PutComplianceItems"
}


export class PutComplianceItemsHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutComplianceItemsXAmzTargetEnum;
}


export class PutComplianceItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutComplianceItemsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutComplianceItemsRequest;
}


export class PutComplianceItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  complianceTypeCountLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidItemContentException?: any;

  @SpeakeasyMetadata()
  invalidResourceId?: any;

  @SpeakeasyMetadata()
  invalidResourceType?: any;

  @SpeakeasyMetadata()
  itemSizeLimitExceededException?: any;

  @SpeakeasyMetadata()
  putComplianceItemsResult?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  totalSizeLimitExceededException?: any;
}
