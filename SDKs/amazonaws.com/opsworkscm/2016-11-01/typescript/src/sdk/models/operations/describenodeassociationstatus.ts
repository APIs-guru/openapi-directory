import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeNodeAssociationStatusXAmzTargetEnum {
    OpsWorksCmV20161101DescribeNodeAssociationStatus = "OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus"
}


export class DescribeNodeAssociationStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeNodeAssociationStatusXAmzTargetEnum;
}


export class DescribeNodeAssociationStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeNodeAssociationStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeNodeAssociationStatusRequest;
}


export class DescribeNodeAssociationStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeNodeAssociationStatusResponse?: shared.DescribeNodeAssociationStatusResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
