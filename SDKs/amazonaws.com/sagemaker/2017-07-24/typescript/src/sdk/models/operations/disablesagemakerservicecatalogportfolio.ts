import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DisableSagemakerServicecatalogPortfolioXAmzTargetEnum {
    SageMakerDisableSagemakerServicecatalogPortfolio = "SageMaker.DisableSagemakerServicecatalogPortfolio"
}


export class DisableSagemakerServicecatalogPortfolioHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisableSagemakerServicecatalogPortfolioXAmzTargetEnum;
}


export class DisableSagemakerServicecatalogPortfolioRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisableSagemakerServicecatalogPortfolioHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class DisableSagemakerServicecatalogPortfolioResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disableSagemakerServicecatalogPortfolioOutput?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
