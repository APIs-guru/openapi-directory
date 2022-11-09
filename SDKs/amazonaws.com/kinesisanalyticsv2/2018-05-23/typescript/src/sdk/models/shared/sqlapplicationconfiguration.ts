import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Input } from "./input";
import { Output } from "./output";
import { ReferenceDataSource } from "./referencedatasource";


// SqlApplicationConfiguration
/** 
 * Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
**/
export class SqlApplicationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Inputs", elemType: shared.Input })
  inputs?: Input[];

  @Metadata({ data: "json, name=Outputs", elemType: shared.Output })
  outputs?: Output[];

  @Metadata({ data: "json, name=ReferenceDataSources", elemType: shared.ReferenceDataSource })
  referenceDataSources?: ReferenceDataSource[];
}
