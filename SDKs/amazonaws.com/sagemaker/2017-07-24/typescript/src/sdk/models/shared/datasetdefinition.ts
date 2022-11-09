import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AthenaDatasetDefinition } from "./athenadatasetdefinition";
import { DataDistributionTypeEnum } from "./datadistributiontypeenum";
import { InputModeEnum } from "./inputmodeenum";
import { RedshiftDatasetDefinition } from "./redshiftdatasetdefinition";


// DatasetDefinition
/** 
 * Configuration for Dataset Definition inputs. The Dataset Definition input must specify exactly one of either <code>AthenaDatasetDefinition</code> or <code>RedshiftDatasetDefinition</code> types.
**/
export class DatasetDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=AthenaDatasetDefinition" })
  athenaDatasetDefinition?: AthenaDatasetDefinition;

  @Metadata({ data: "json, name=DataDistributionType" })
  dataDistributionType?: DataDistributionTypeEnum;

  @Metadata({ data: "json, name=InputMode" })
  inputMode?: InputModeEnum;

  @Metadata({ data: "json, name=LocalPath" })
  localPath?: string;

  @Metadata({ data: "json, name=RedshiftDatasetDefinition" })
  redshiftDatasetDefinition?: RedshiftDatasetDefinition;
}
