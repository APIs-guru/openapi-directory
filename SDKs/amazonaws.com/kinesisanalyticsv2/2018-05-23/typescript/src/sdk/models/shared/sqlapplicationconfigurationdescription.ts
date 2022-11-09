import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InputDescription } from "./inputdescription";
import { OutputDescription } from "./outputdescription";
import { ReferenceDataSourceDescription } from "./referencedatasourcedescription";


// SqlApplicationConfigurationDescription
/** 
 * Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
**/
export class SqlApplicationConfigurationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=InputDescriptions", elemType: shared.InputDescription })
  inputDescriptions?: InputDescription[];

  @Metadata({ data: "json, name=OutputDescriptions", elemType: shared.OutputDescription })
  outputDescriptions?: OutputDescription[];

  @Metadata({ data: "json, name=ReferenceDataSourceDescriptions", elemType: shared.ReferenceDataSourceDescription })
  referenceDataSourceDescriptions?: ReferenceDataSourceDescription[];
}
