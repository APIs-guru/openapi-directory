import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeEffectivePatchesForPatchBaselineQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum {
    AmazonSsmDescribeEffectivePatchesForPatchBaseline = "AmazonSSM.DescribeEffectivePatchesForPatchBaseline"
}


export class DescribeEffectivePatchesForPatchBaselineHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum;
}


export class DescribeEffectivePatchesForPatchBaselineRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeEffectivePatchesForPatchBaselineQueryParams;

  @Metadata()
  headers: DescribeEffectivePatchesForPatchBaselineHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeEffectivePatchesForPatchBaselineRequest;
}


export class DescribeEffectivePatchesForPatchBaselineResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeEffectivePatchesForPatchBaselineResult?: shared.DescribeEffectivePatchesForPatchBaselineResult;

  @Metadata()
  doesNotExistException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidResourceId?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperatingSystem?: any;
}
