import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteModelPackageGroupPolicyXAmzTargetEnum {
    SageMakerDeleteModelPackageGroupPolicy = "SageMaker.DeleteModelPackageGroupPolicy"
}


export class DeleteModelPackageGroupPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteModelPackageGroupPolicyXAmzTargetEnum;
}


export class DeleteModelPackageGroupPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteModelPackageGroupPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteModelPackageGroupPolicyInput;
}


export class DeleteModelPackageGroupPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
