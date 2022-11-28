import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteInstanceRequest extends SpeakeasyBase {
    deleteElasticIp?: boolean;
    deleteVolumes?: boolean;
    instanceId: string;
}
