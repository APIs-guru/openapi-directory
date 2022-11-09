import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeDomainHeaders extends SpeakeasyBase {
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


export class DescribeDomainRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=FleetArn" })
  fleetArn: string;
}


export class DescribeDomainRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeDomainHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DescribeDomainRequestBody;
}


export class DescribeDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeDomainResponse?: shared.DescribeDomainResponse;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}
