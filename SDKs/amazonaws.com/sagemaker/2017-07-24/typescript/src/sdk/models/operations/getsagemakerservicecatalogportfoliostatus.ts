import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSagemakerServicecatalogPortfolioStatusXAmzTargetEnum {
    SageMakerGetSagemakerServicecatalogPortfolioStatus = "SageMaker.GetSagemakerServicecatalogPortfolioStatus"
}


export class GetSagemakerServicecatalogPortfolioStatusHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetSagemakerServicecatalogPortfolioStatusXAmzTargetEnum;
}


export class GetSagemakerServicecatalogPortfolioStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetSagemakerServicecatalogPortfolioStatusHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class GetSagemakerServicecatalogPortfolioStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSagemakerServicecatalogPortfolioStatusOutput?: shared.GetSagemakerServicecatalogPortfolioStatusOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
