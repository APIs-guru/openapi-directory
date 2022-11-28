import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://ethereum.apidapp.com/1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    deleteKeyKey(req: operations.DeleteKeyKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteKeyKeyResponse>;
    /**
     * getAccountId - Get account balance
    **/
    getAccountId(req: operations.GetAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountIdResponse>;
    /**
     * getBlock - Access detailed block information
    **/
    getBlock(req: operations.GetBlockRequest, config?: AxiosRequestConfig): Promise<operations.GetBlockResponse>;
    /**
     * getBlockId - Get information about particular block
    **/
    getBlockId(req: operations.GetBlockIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBlockIdResponse>;
    /**
     * getBlockIdTransaction - Get transaction count within block
    **/
    getBlockIdTransaction(req: operations.GetBlockIdTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetBlockIdTransactionResponse>;
    /**
     * getBlockIdTransactionIndex - Get information about particular transaction within block
    **/
    getBlockIdTransactionIndex(req: operations.GetBlockIdTransactionIndexRequest, config?: AxiosRequestConfig): Promise<operations.GetBlockIdTransactionIndexResponse>;
    /**
     * getBlockchain - Get a list of supported blockchains
    **/
    getBlockchain(req: operations.GetBlockchainRequest, config?: AxiosRequestConfig): Promise<operations.GetBlockchainResponse>;
    /**
     * getBlockchainId - Get information about blockchain woth given id
    **/
    getBlockchainId(req: operations.GetBlockchainIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBlockchainIdResponse>;
    /**
     * getContractId - Get contract balance
    **/
    getContractId(req: operations.GetContractIdRequest, config?: AxiosRequestConfig): Promise<operations.GetContractIdResponse>;
    /**
     * getErc20 - Get token information such as name, total amount in circulation, etc
    **/
    getErc20(config?: AxiosRequestConfig): Promise<operations.GetErc20Response>;
    /**
     * getErc20Address - Get information amout token balance in the account
    **/
    getErc20Address(req: operations.GetErc20AddressRequest, config?: AxiosRequestConfig): Promise<operations.GetErc20AddressResponse>;
    getKey(req: operations.GetKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetKeyResponse>;
    /**
     * getTransactionHash - Get information about transaction by the transaction hash value
    **/
    getTransactionHash(req: operations.GetTransactionHashRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionHashResponse>;
    /**
     * getTransactionHashReceipt - Get receipt detail information
    **/
    getTransactionHashReceipt(req: operations.GetTransactionHashReceiptRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionHashReceiptResponse>;
    /**
     * getVersion - Get API version info
    **/
    getVersion(config?: AxiosRequestConfig): Promise<operations.GetVersionResponse>;
    /**
     * getWallet - Get current account balance
    **/
    getWallet(config?: AxiosRequestConfig): Promise<operations.GetWalletResponse>;
    getWalletAccount(config?: AxiosRequestConfig): Promise<operations.GetWalletAccountResponse>;
    /**
     * getWalletAccountId - Get account balance
    **/
    getWalletAccountId(req: operations.GetWalletAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWalletAccountIdResponse>;
    options(config?: AxiosRequestConfig): Promise<operations.OptionsResponse>;
    optionsAccount(config?: AxiosRequestConfig): Promise<operations.OptionsAccountResponse>;
    optionsAccountId(req: operations.OptionsAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.OptionsAccountIdResponse>;
    optionsBlock(config?: AxiosRequestConfig): Promise<operations.OptionsBlockResponse>;
    optionsBlockId(req: operations.OptionsBlockIdRequest, config?: AxiosRequestConfig): Promise<operations.OptionsBlockIdResponse>;
    optionsBlockIdTransaction(req: operations.OptionsBlockIdTransactionRequest, config?: AxiosRequestConfig): Promise<operations.OptionsBlockIdTransactionResponse>;
    optionsBlockIdTransactionIndex(req: operations.OptionsBlockIdTransactionIndexRequest, config?: AxiosRequestConfig): Promise<operations.OptionsBlockIdTransactionIndexResponse>;
    optionsBlockchain(config?: AxiosRequestConfig): Promise<operations.OptionsBlockchainResponse>;
    optionsBlockchainId(req: operations.OptionsBlockchainIdRequest, config?: AxiosRequestConfig): Promise<operations.OptionsBlockchainIdResponse>;
    optionsContract(config?: AxiosRequestConfig): Promise<operations.OptionsContractResponse>;
    optionsContractId(req: operations.OptionsContractIdRequest, config?: AxiosRequestConfig): Promise<operations.OptionsContractIdResponse>;
    optionsEcho(config?: AxiosRequestConfig): Promise<operations.OptionsEchoResponse>;
    optionsErc20(config?: AxiosRequestConfig): Promise<operations.OptionsErc20Response>;
    optionsErc20Address(req: operations.OptionsErc20AddressRequest, config?: AxiosRequestConfig): Promise<operations.OptionsErc20AddressResponse>;
    optionsKey(config?: AxiosRequestConfig): Promise<operations.OptionsKeyResponse>;
    optionsKeyKey(req: operations.OptionsKeyKeyRequest, config?: AxiosRequestConfig): Promise<operations.OptionsKeyKeyResponse>;
    optionsTransaction(config?: AxiosRequestConfig): Promise<operations.OptionsTransactionResponse>;
    optionsTransactionHash(req: operations.OptionsTransactionHashRequest, config?: AxiosRequestConfig): Promise<operations.OptionsTransactionHashResponse>;
    optionsTransactionHashReceipt(req: operations.OptionsTransactionHashReceiptRequest, config?: AxiosRequestConfig): Promise<operations.OptionsTransactionHashReceiptResponse>;
    optionsVersion(config?: AxiosRequestConfig): Promise<operations.OptionsVersionResponse>;
    optionsWallet(config?: AxiosRequestConfig): Promise<operations.OptionsWalletResponse>;
    optionsWalletAccount(config?: AxiosRequestConfig): Promise<operations.OptionsWalletAccountResponse>;
    optionsWalletAccountId(req: operations.OptionsWalletAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.OptionsWalletAccountIdResponse>;
    optionsWalletAccountIdPay(req: operations.OptionsWalletAccountIdPayRequest, config?: AxiosRequestConfig): Promise<operations.OptionsWalletAccountIdPayResponse>;
    /**
     * postAccount - Create new account
    **/
    postAccount(req: operations.PostAccountRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountResponse>;
    /**
     * postContract - Create a new smart contract
    **/
    postContract(config?: AxiosRequestConfig): Promise<operations.PostContractResponse>;
    /**
     * postContractId - Call the contract
    **/
    postContractId(req: operations.PostContractIdRequest, config?: AxiosRequestConfig): Promise<operations.PostContractIdResponse>;
    postErc20(config?: AxiosRequestConfig): Promise<operations.PostErc20Response>;
    /**
     * postErc20Address - Transfer tokens to another account
    **/
    postErc20Address(req: operations.PostErc20AddressRequest, config?: AxiosRequestConfig): Promise<operations.PostErc20AddressResponse>;
    postKey(config?: AxiosRequestConfig): Promise<operations.PostKeyResponse>;
    /**
     * postTransaction - Create a new transaction. Transfer Ether between accounts
    **/
    postTransaction(req: operations.PostTransactionRequest, config?: AxiosRequestConfig): Promise<operations.PostTransactionResponse>;
    /**
     * postWallet - Create personal wallet
    **/
    postWallet(config?: AxiosRequestConfig): Promise<operations.PostWalletResponse>;
    postWalletAccount(config?: AxiosRequestConfig): Promise<operations.PostWalletAccountResponse>;
    postWalletAccountIdContract(req: operations.PostWalletAccountIdContractRequest, config?: AxiosRequestConfig): Promise<operations.PostWalletAccountIdContractResponse>;
    postWalletAccountIdErc20(req: operations.PostWalletAccountIdErc20Request, config?: AxiosRequestConfig): Promise<operations.PostWalletAccountIdErc20Response>;
    /**
     * postWalletAccountIdPay - Send payment from the account held within the wallet
    **/
    postWalletAccountIdPay(req: operations.PostWalletAccountIdPayRequest, config?: AxiosRequestConfig): Promise<operations.PostWalletAccountIdPayResponse>;
}
export {};
