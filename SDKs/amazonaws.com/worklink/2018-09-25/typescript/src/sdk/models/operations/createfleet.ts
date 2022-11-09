import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateFleetHeaders extends SpeakeasyBase {
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


export class CreateFleetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=FleetName" })
  fleetName: string;

  @Metadata({ data: "json, name=OptimizeForEndUserLocation" })
  optimizeForEndUserLocation?: boolean;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class CreateFleetRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateFleetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateFleetRequestBody;
}


export class CreateFleetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createFleetResponse?: shared.CreateFleetResponse;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}
