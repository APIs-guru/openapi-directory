import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeRecipeXAmzTargetEnum {
    AmazonPersonalizeDescribeRecipe = "AmazonPersonalize.DescribeRecipe"
}


export class DescribeRecipeHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeRecipeXAmzTargetEnum;
}


export class DescribeRecipeRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeRecipeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeRecipeRequest;
}


export class DescribeRecipeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeRecipeResponse?: shared.DescribeRecipeResponse;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
