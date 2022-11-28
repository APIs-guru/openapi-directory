import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class StromkontoLedger {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * prepareTransaction - Prepare Transaction
     *
     * Prepares and inques a transaction (transfer) between two accounts (Stromkonten). This might be used to send any balanced entity. Using this endpoint will only prepare the transaction and enques it for signing and countersigning. This is done from within the user UI using validation process. Note: This API method does not validate any transations. In other words authentication, authorization, validation and actual transfer of value is done using a smart contract during processing in the energy blockchain.
     *
    **/
    prepareTransaction(req: operations.PrepareTransactionRequest, config?: AxiosRequestConfig): Promise<operations.PrepareTransactionResponse>;
    /**
     * stromkontoBalances - Balances
     *
     * Stromkonto represents a core component of the Corrently Ecosystem. It is a ledger for green energy related transactions and gets heavily used by the public Web-UI on www.stromkonto.net . Beside of some decoration and reformating operations all data is backed by the [Energychain blockchain](https://github.com/energychain/) to provide consensus of balances and transactions. Use this API Endppoint if you prefere not to work with low level Distributed Ledger Technology (Blockchain).
     *
    **/
    stromkontoBalances(req: operations.StromkontoBalancesRequest, config?: AxiosRequestConfig): Promise<operations.StromkontoBalancesResponse>;
    /**
     * stromkontoChoices - Selectable Choices for customer
     *
     * Signable choices (contract changes) for customer.
     *
    **/
    stromkontoChoices(req: operations.StromkontoChoicesRequest, config?: AxiosRequestConfig): Promise<operations.StromkontoChoicesResponse>;
    /**
     * stromkontoLogin - Login (via Mail)
     *
     * Sends a mail to a given email address to login this user. This function makes life a bit easier in order to not having to deal with private key protection on the user side as a shared key is used to sign transactions onbehalf of a particular account.  However viewing consensus information (balances) are public and *might move* from account to account without prior notification. Best practice for third party uses is to always start a session with the login RESP call and only create a user in case the response indicates an `unregistered` status.
     *
    **/
    stromkontoLogin(req: operations.StromkontoLoginRequest, config?: AxiosRequestConfig): Promise<operations.StromkontoLoginResponse>;
    /**
     * stromkontoRegister - Register (new Stromkonto)
     *
     * Calling this method with an unregistered (new) email will create a new account (Stromkonto) with all balances having a value of `0` and no transaction history. In addition some basic properties like region and zipcode are set to allow further operation of account.
     *
    **/
    stromkontoRegister(req: operations.StromkontoRegisterRequest, config?: AxiosRequestConfig): Promise<operations.StromkontoRegisterResponse>;
}
