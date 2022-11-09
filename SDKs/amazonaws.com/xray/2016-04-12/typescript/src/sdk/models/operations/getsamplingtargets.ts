import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSamplingTargetsHeaders extends SpeakeasyBase {
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
}


export class GetSamplingTargetsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=SamplingStatisticsDocuments", elemType: shared.SamplingStatisticsDocument })
  samplingStatisticsDocuments: shared.SamplingStatisticsDocument[];
}


export class GetSamplingTargetsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetSamplingTargetsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetSamplingTargetsRequestBody;
}


export class GetSamplingTargetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSamplingTargetsResult?: shared.GetSamplingTargetsResult;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttledException?: any;
}
