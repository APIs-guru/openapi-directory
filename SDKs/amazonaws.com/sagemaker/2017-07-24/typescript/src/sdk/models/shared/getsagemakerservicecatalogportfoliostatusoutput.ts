import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SagemakerServicecatalogStatusEnum } from "./sagemakerservicecatalogstatusenum";



export class GetSagemakerServicecatalogPortfolioStatusOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: SagemakerServicecatalogStatusEnum;
}
