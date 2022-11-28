import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DisableSagemakerServicecatalogPortfolioXAmzTargetEnum {
    SageMakerDisableSagemakerServicecatalogPortfolio = "SageMaker.DisableSagemakerServicecatalogPortfolio"
}


export class DisableSagemakerServicecatalogPortfolioHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisableSagemakerServicecatalogPortfolioXAmzTargetEnum;
}


export class DisableSagemakerServicecatalogPortfolioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DisableSagemakerServicecatalogPortfolioHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class DisableSagemakerServicecatalogPortfolioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  disableSagemakerServicecatalogPortfolioOutput?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
