import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AddApplicationVpcConfigurationXAmzTargetEnum {
    KinesisAnalytics20180523AddApplicationVpcConfiguration = "KinesisAnalytics_20180523.AddApplicationVpcConfiguration"
}


export class AddApplicationVpcConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddApplicationVpcConfigurationXAmzTargetEnum;
}


export class AddApplicationVpcConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: AddApplicationVpcConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AddApplicationVpcConfigurationRequest;
}


export class AddApplicationVpcConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  addApplicationVpcConfigurationResponse?: shared.AddApplicationVpcConfigurationResponse;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidApplicationConfigurationException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
