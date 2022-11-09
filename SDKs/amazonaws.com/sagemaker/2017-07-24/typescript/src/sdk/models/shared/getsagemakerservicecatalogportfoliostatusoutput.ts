import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SagemakerServicecatalogStatusEnum } from "./sagemakerservicecatalogstatusenum";


export class GetSagemakerServicecatalogPortfolioStatusOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: SagemakerServicecatalogStatusEnum;
}
