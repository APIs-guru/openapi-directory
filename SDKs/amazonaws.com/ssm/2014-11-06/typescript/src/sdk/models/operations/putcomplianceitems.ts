import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutComplianceItemsXAmzTargetEnum {
    AmazonSsmPutComplianceItems = "AmazonSSM.PutComplianceItems"
}


export class PutComplianceItemsHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutComplianceItemsXAmzTargetEnum;
}


export class PutComplianceItemsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutComplianceItemsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutComplianceItemsRequest;
}


export class PutComplianceItemsResponse extends SpeakeasyBase {
  @Metadata()
  complianceTypeCountLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidItemContentException?: any;

  @Metadata()
  invalidResourceId?: any;

  @Metadata()
  invalidResourceType?: any;

  @Metadata()
  itemSizeLimitExceededException?: any;

  @Metadata()
  putComplianceItemsResult?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  totalSizeLimitExceededException?: any;
}
