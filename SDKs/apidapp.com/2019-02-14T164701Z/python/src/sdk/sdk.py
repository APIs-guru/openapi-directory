

import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://ethereum.apidapp.com/1",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def delete_key_key_(self, request: operations.DeleteKeyKeyRequest) -> operations.DeleteKeyKeyResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/key/{key}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteKeyKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def get_account_id_(self, request: operations.GetAccountIDRequest) -> operations.GetAccountIDResponse:
        r"""Get account balance
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def get_block(self, request: operations.GetBlockRequest) -> operations.GetBlockResponse:
        r"""Access detailed block information
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/block"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBlockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def get_block_id_(self, request: operations.GetBlockIDRequest) -> operations.GetBlockIDResponse:
        r"""Get information about particular block
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/block/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBlockIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def get_block_id_transaction(self, request: operations.GetBlockIDTransactionRequest) -> operations.GetBlockIDTransactionResponse:
        r"""Get transaction count within block
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/block/{id}/transaction", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBlockIDTransactionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def get_block_id_transaction_index_(self, request: operations.GetBlockIDTransactionIndexRequest) -> operations.GetBlockIDTransactionIndexResponse:
        r"""Get information about particular transaction within block
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/block/{id}/transaction/{index}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBlockIDTransactionIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def get_blockchain(self, request: operations.GetBlockchainRequest) -> operations.GetBlockchainResponse:
        r"""Get a list of supported blockchains
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/blockchain"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBlockchainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def get_blockchain_id_(self, request: operations.GetBlockchainIDRequest) -> operations.GetBlockchainIDResponse:
        r"""Get information about blockchain woth given id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/blockchain/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBlockchainIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def get_contract_id_(self, request: operations.GetContractIDRequest) -> operations.GetContractIDResponse:
        r"""Get contract balance
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/contract/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContractIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def get_erc20(self) -> operations.GetErc20Response:
        r"""Get token information such as name, total amount in circulation, etc
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/erc20"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetErc20Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def get_erc20_address_(self, request: operations.GetErc20AddressRequest) -> operations.GetErc20AddressResponse:
        r"""Get information amout token balance in the account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/erc20/{address}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetErc20AddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def get_key(self, request: operations.GetKeyRequest) -> operations.GetKeyResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/key"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def get_transaction_hash_(self, request: operations.GetTransactionHashRequest) -> operations.GetTransactionHashResponse:
        r"""Get information about transaction by the transaction hash value
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/transaction/{hash}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionHashResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def get_transaction_hash_receipt(self, request: operations.GetTransactionHashReceiptRequest) -> operations.GetTransactionHashReceiptResponse:
        r"""Get receipt detail information
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/transaction/{hash}/receipt", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionHashReceiptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def get_version(self) -> operations.GetVersionResponse:
        r"""Get API version info
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def get_wallet(self) -> operations.GetWalletResponse:
        r"""Get current account balance
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/wallet"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWalletResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def get_wallet_account(self) -> operations.GetWalletAccountResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/wallet/account"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWalletAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def get_wallet_account_id_(self, request: operations.GetWalletAccountIDRequest) -> operations.GetWalletAccountIDResponse:
        r"""Get account balance
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/wallet/account/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWalletAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_(self) -> operations.OptionsResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/"
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_account(self) -> operations.OptionsAccountResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account"
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_account_id_(self, request: operations.OptionsAccountIDRequest) -> operations.OptionsAccountIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_block(self) -> operations.OptionsBlockResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/block"
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsBlockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_block_id_(self, request: operations.OptionsBlockIDRequest) -> operations.OptionsBlockIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/block/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsBlockIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_block_id_transaction(self, request: operations.OptionsBlockIDTransactionRequest) -> operations.OptionsBlockIDTransactionResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/block/{id}/transaction", request.path_params)
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsBlockIDTransactionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_block_id_transaction_index_(self, request: operations.OptionsBlockIDTransactionIndexRequest) -> operations.OptionsBlockIDTransactionIndexResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/block/{id}/transaction/{index}", request.path_params)
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsBlockIDTransactionIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_blockchain(self) -> operations.OptionsBlockchainResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/blockchain"
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsBlockchainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_blockchain_id_(self, request: operations.OptionsBlockchainIDRequest) -> operations.OptionsBlockchainIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/blockchain/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsBlockchainIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_contract(self) -> operations.OptionsContractResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/contract"
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsContractResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_contract_id_(self, request: operations.OptionsContractIDRequest) -> operations.OptionsContractIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/contract/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsContractIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_echo(self) -> operations.OptionsEchoResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/echo"
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsEchoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_erc20(self) -> operations.OptionsErc20Response:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/erc20"
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsErc20Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_erc20_address_(self, request: operations.OptionsErc20AddressRequest) -> operations.OptionsErc20AddressResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/erc20/{address}", request.path_params)
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsErc20AddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_key(self) -> operations.OptionsKeyResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/key"
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_key_key_(self, request: operations.OptionsKeyKeyRequest) -> operations.OptionsKeyKeyResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/key/{key}", request.path_params)
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsKeyKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_transaction(self) -> operations.OptionsTransactionResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/transaction"
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsTransactionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_transaction_hash_(self, request: operations.OptionsTransactionHashRequest) -> operations.OptionsTransactionHashResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/transaction/{hash}", request.path_params)
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsTransactionHashResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_transaction_hash_receipt(self, request: operations.OptionsTransactionHashReceiptRequest) -> operations.OptionsTransactionHashReceiptResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/transaction/{hash}/receipt", request.path_params)
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsTransactionHashReceiptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_version(self) -> operations.OptionsVersionResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/version"
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_wallet(self) -> operations.OptionsWalletResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/wallet"
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsWalletResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_wallet_account(self) -> operations.OptionsWalletAccountResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/wallet/account"
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsWalletAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_wallet_account_id_(self, request: operations.OptionsWalletAccountIDRequest) -> operations.OptionsWalletAccountIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/wallet/account/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsWalletAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def options_wallet_account_id_pay(self, request: operations.OptionsWalletAccountIDPayRequest) -> operations.OptionsWalletAccountIDPayResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/wallet/account/{id}/pay", request.path_params)
        
        
        client = self._client
        
        r = client.request("OPTIONS", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsWalletAccountIDPayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def post_account(self, request: operations.PostAccountRequest) -> operations.PostAccountResponse:
        r"""Create new account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def post_contract(self) -> operations.PostContractResponse:
        r"""Create a new smart contract
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/contract"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContractResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def post_contract_id_(self, request: operations.PostContractIDRequest) -> operations.PostContractIDResponse:
        r"""Call the contract
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/contract/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContractIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def post_erc20(self) -> operations.PostErc20Response:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/erc20"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostErc20Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def post_erc20_address_(self, request: operations.PostErc20AddressRequest) -> operations.PostErc20AddressResponse:
        r"""Transfer tokens to another account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/erc20/{address}", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostErc20AddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def post_key(self) -> operations.PostKeyResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/key"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def post_transaction(self, request: operations.PostTransactionRequest) -> operations.PostTransactionResponse:
        r"""Create a new transaction. Transfer Ether between accounts
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/transaction"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTransactionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def post_wallet(self) -> operations.PostWalletResponse:
        r"""Create personal wallet
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/wallet"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWalletResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def post_wallet_account(self) -> operations.PostWalletAccountResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/wallet/account"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWalletAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def post_wallet_account_id_contract(self, request: operations.PostWalletAccountIDContractRequest) -> operations.PostWalletAccountIDContractResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/wallet/account/{id}/contract", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWalletAccountIDContractResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def post_wallet_account_id_erc20(self, request: operations.PostWalletAccountIDErc20Request) -> operations.PostWalletAccountIDErc20Response:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/wallet/account/{id}/erc20", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWalletAccountIDErc20Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def post_wallet_account_id_pay(self, request: operations.PostWalletAccountIDPayRequest) -> operations.PostWalletAccountIDPayResponse:
        r"""Send payment from the account held within the wallet
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/wallet/account/{id}/pay", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWalletAccountIDPayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    