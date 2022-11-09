import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SolutionConfig } from "./solutionconfig";


export class CreateSolutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetGroupArn" })
  datasetGroupArn: string;

  @Metadata({ data: "json, name=eventType" })
  eventType?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=performAutoML" })
  performAutoMl?: boolean;

  @Metadata({ data: "json, name=performHPO" })
  performHpo?: boolean;

  @Metadata({ data: "json, name=recipeArn" })
  recipeArn?: string;

  @Metadata({ data: "json, name=solutionConfig" })
  solutionConfig?: SolutionConfig;
}
