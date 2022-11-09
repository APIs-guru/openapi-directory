import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateSubnetGroupXAmzTargetEnum {
    AmazonMemoryDbCreateSubnetGroup = "AmazonMemoryDB.CreateSubnetGroup"
}


export class CreateSubnetGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateSubnetGroupXAmzTargetEnum;
}


export class CreateSubnetGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateSubnetGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateSubnetGroupRequest;
}


export class CreateSubnetGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createSubnetGroupResponse?: shared.CreateSubnetGroupResponse;

  @Metadata()
  invalidSubnet?: any;

  @Metadata()
  serviceLinkedRoleNotFoundFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  subnetGroupAlreadyExistsFault?: any;

  @Metadata()
  subnetGroupQuotaExceededFault?: any;

  @Metadata()
  subnetNotAllowedFault?: any;

  @Metadata()
  subnetQuotaExceededFault?: any;

  @Metadata()
  tagQuotaPerResourceExceeded?: any;
}
