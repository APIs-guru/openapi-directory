import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Input } from "./input";
import { Output } from "./output";
import { ReferenceDataSource } from "./referencedatasource";



// SqlApplicationConfiguration
/** 
 * Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
**/
export class SqlApplicationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Inputs", elemType: Input })
  inputs?: Input[];

  @SpeakeasyMetadata({ data: "json, name=Outputs", elemType: Output })
  outputs?: Output[];

  @SpeakeasyMetadata({ data: "json, name=ReferenceDataSources", elemType: ReferenceDataSource })
  referenceDataSources?: ReferenceDataSource[];
}
