import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteConfigurationSetEventDestinationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConfigurationSetName" })
  configurationSetName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EventDestinationName" })
  eventDestinationName: string;
}


export class DeleteConfigurationSetEventDestinationHeaders extends SpeakeasyBase {
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


export class DeleteConfigurationSetEventDestinationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteConfigurationSetEventDestinationPathParams;

  @Metadata()
  headers: DeleteConfigurationSetEventDestinationHeaders;
}


export class DeleteConfigurationSetEventDestinationResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteConfigurationSetEventDestinationResponse?: Map<string, any>;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
