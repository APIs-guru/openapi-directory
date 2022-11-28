import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A deployment created as the result of an Actions check run from a workflow that references an environment
**/
export declare class DeploymentSimple extends SpeakeasyBase {
    createdAt: Date;
    description: string;
    environment: string;
    id: number;
    nodeId: string;
    originalEnvironment?: string;
    performedViaGithubApp?: Map<string, any>;
    productionEnvironment?: boolean;
    repositoryUrl: string;
    statusesUrl: string;
    task: string;
    transientEnvironment?: boolean;
    updatedAt: Date;
    url: string;
}
