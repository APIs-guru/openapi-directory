import { SpeakeasyBase } from "../../../internal/utils";
import { AthenaDatasetDefinition } from "./athenadatasetdefinition";
import { DataDistributionTypeEnum } from "./datadistributiontypeenum";
import { InputModeEnum } from "./inputmodeenum";
import { RedshiftDatasetDefinition } from "./redshiftdatasetdefinition";
/**
 * Configuration for Dataset Definition inputs. The Dataset Definition input must specify exactly one of either <code>AthenaDatasetDefinition</code> or <code>RedshiftDatasetDefinition</code> types.
**/
export declare class DatasetDefinition extends SpeakeasyBase {
    athenaDatasetDefinition?: AthenaDatasetDefinition;
    dataDistributionType?: DataDistributionTypeEnum;
    inputMode?: InputModeEnum;
    localPath?: string;
    redshiftDatasetDefinition?: RedshiftDatasetDefinition;
}
