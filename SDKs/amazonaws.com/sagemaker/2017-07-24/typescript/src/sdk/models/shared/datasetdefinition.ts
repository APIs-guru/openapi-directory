import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AthenaDatasetDefinition } from "./athenadatasetdefinition";
import { DataDistributionTypeEnum } from "./datadistributiontypeenum";
import { InputModeEnum } from "./inputmodeenum";
import { RedshiftDatasetDefinition } from "./redshiftdatasetdefinition";



// DatasetDefinition
/** 
 * Configuration for Dataset Definition inputs. The Dataset Definition input must specify exactly one of either <code>AthenaDatasetDefinition</code> or <code>RedshiftDatasetDefinition</code> types.
**/
export class DatasetDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AthenaDatasetDefinition" })
  athenaDatasetDefinition?: AthenaDatasetDefinition;

  @SpeakeasyMetadata({ data: "json, name=DataDistributionType" })
  dataDistributionType?: DataDistributionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=InputMode" })
  inputMode?: InputModeEnum;

  @SpeakeasyMetadata({ data: "json, name=LocalPath" })
  localPath?: string;

  @SpeakeasyMetadata({ data: "json, name=RedshiftDatasetDefinition" })
  redshiftDatasetDefinition?: RedshiftDatasetDefinition;
}
