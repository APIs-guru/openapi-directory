import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteSubnetGroupXAmzTargetEnum {
    AmazonMemoryDbDeleteSubnetGroup = "AmazonMemoryDB.DeleteSubnetGroup"
}


export class DeleteSubnetGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteSubnetGroupXAmzTargetEnum;
}


export class DeleteSubnetGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteSubnetGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteSubnetGroupRequest;
}


export class DeleteSubnetGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteSubnetGroupResponse?: shared.DeleteSubnetGroupResponse;

  @Metadata()
  serviceLinkedRoleNotFoundFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  subnetGroupInUseFault?: any;

  @Metadata()
  subnetGroupNotFoundFault?: any;
}
