import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutResolverRulePolicyXAmzTargetEnum {
    Route53ResolverPutResolverRulePolicy = "Route53Resolver.PutResolverRulePolicy"
}


export class PutResolverRulePolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutResolverRulePolicyXAmzTargetEnum;
}


export class PutResolverRulePolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutResolverRulePolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutResolverRulePolicyRequest;
}


export class PutResolverRulePolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidPolicyDocument?: any;

  @Metadata()
  putResolverRulePolicyResponse?: shared.PutResolverRulePolicyResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  unknownResourceException?: any;
}
