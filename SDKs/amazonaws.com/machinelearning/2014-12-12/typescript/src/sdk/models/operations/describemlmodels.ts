import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeMlModelsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeMlModelsXAmzTargetEnum {
    AmazonMl20141212DescribeMlModels = "AmazonML_20141212.DescribeMLModels"
}


export class DescribeMlModelsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeMlModelsXAmzTargetEnum;
}


export class DescribeMlModelsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeMlModelsQueryParams;

  @Metadata()
  headers: DescribeMlModelsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeMlModelsInput;
}


export class DescribeMlModelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeMlModelsOutput?: shared.DescribeMlModelsOutput;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
