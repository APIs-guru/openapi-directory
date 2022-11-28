import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the login information for the container image registry of an Amazon Lightsail account.
**/
export declare class ContainerServiceRegistryLogin extends SpeakeasyBase {
    expiresAt?: Date;
    password?: string;
    registry?: string;
    username?: string;
}
