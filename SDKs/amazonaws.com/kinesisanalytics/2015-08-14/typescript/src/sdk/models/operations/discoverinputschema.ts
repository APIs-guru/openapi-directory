import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DiscoverInputSchemaXAmzTargetEnum {
    KinesisAnalytics20150814DiscoverInputSchema = "KinesisAnalytics_20150814.DiscoverInputSchema"
}


export class DiscoverInputSchemaHeaders extends SpeakeasyBase {
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
  xAmzTarget: DiscoverInputSchemaXAmzTargetEnum;
}


export class DiscoverInputSchemaRequest extends SpeakeasyBase {
  @Metadata()
  headers: DiscoverInputSchemaHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DiscoverInputSchemaRequest;
}


export class DiscoverInputSchemaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  discoverInputSchemaResponse?: shared.DiscoverInputSchemaResponse;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  resourceProvisionedThroughputExceededException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unableToDetectSchemaException?: any;
}
