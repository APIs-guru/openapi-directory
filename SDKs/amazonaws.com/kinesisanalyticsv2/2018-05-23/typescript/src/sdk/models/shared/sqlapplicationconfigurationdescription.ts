import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputDescription } from "./inputdescription";
import { OutputDescription } from "./outputdescription";
import { ReferenceDataSourceDescription } from "./referencedatasourcedescription";



// SqlApplicationConfigurationDescription
/** 
 * Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
**/
export class SqlApplicationConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InputDescriptions", elemType: InputDescription })
  inputDescriptions?: InputDescription[];

  @SpeakeasyMetadata({ data: "json, name=OutputDescriptions", elemType: OutputDescription })
  outputDescriptions?: OutputDescription[];

  @SpeakeasyMetadata({ data: "json, name=ReferenceDataSourceDescriptions", elemType: ReferenceDataSourceDescription })
  referenceDataSourceDescriptions?: ReferenceDataSourceDescription[];
}
