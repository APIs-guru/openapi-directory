import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EnableSagemakerServicecatalogPortfolioXAmzTargetEnum {
    SageMakerEnableSagemakerServicecatalogPortfolio = "SageMaker.EnableSagemakerServicecatalogPortfolio"
}


export class EnableSagemakerServicecatalogPortfolioHeaders extends SpeakeasyBase {
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
  xAmzTarget: EnableSagemakerServicecatalogPortfolioXAmzTargetEnum;
}


export class EnableSagemakerServicecatalogPortfolioRequest extends SpeakeasyBase {
  @Metadata()
  headers: EnableSagemakerServicecatalogPortfolioHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class EnableSagemakerServicecatalogPortfolioResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  enableSagemakerServicecatalogPortfolioOutput?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
