import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionConfiguration } from "./collectionconfiguration";
/**
 * Configuration information for the Debugger hook parameters, metric and tensor collections, and storage paths. To learn more about how to configure the <code>DebugHookConfig</code> parameter, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
**/
export declare class DebugHookConfig extends SpeakeasyBase {
    collectionConfigurations?: CollectionConfiguration[];
    hookParameters?: Map<string, string>;
    localPath?: string;
    s3OutputPath: string;
}
