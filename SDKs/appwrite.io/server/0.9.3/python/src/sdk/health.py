import requests
from sdk.models import operations
from . import utils

class Health:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def health_get(self, request: operations.HealthGetRequest) -> operations.HealthGetResponse:
        r"""Get HTTP
        Check the Appwrite HTTP server is up and responsive.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/health"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 500:
            pass

        return res

    
    def health_get_anti_virus(self, request: operations.HealthGetAntiVirusRequest) -> operations.HealthGetAntiVirusResponse:
        r"""Get Anti virus
        Check the Appwrite Anti Virus server is up and connection is successful.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/health/anti-virus"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthGetAntiVirusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 500:
            pass

        return res

    
    def health_get_cache(self, request: operations.HealthGetCacheRequest) -> operations.HealthGetCacheResponse:
        r"""Get Cache
        Check the Appwrite in-memory cache server is up and connection is successful.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/health/cache"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthGetCacheResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 500:
            pass

        return res

    
    def health_get_db(self, request: operations.HealthGetDbRequest) -> operations.HealthGetDbResponse:
        r"""Get DB
        Check the Appwrite database server is up and connection is successful.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/health/db"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthGetDbResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 500:
            pass

        return res

    
    def health_get_queue_certificates(self, request: operations.HealthGetQueueCertificatesRequest) -> operations.HealthGetQueueCertificatesResponse:
        r"""Get Certificate Queue
        Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/health/queue/certificates"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthGetQueueCertificatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 500:
            pass

        return res

    
    def health_get_queue_functions(self, request: operations.HealthGetQueueFunctionsRequest) -> operations.HealthGetQueueFunctionsResponse:
        r"""Get Functions Queue
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/health/queue/functions"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthGetQueueFunctionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 500:
            pass

        return res

    
    def health_get_queue_logs(self, request: operations.HealthGetQueueLogsRequest) -> operations.HealthGetQueueLogsResponse:
        r"""Get Logs Queue
        Get the number of logs that are waiting to be processed in the Appwrite internal queue server.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/health/queue/logs"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthGetQueueLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 500:
            pass

        return res

    
    def health_get_queue_tasks(self, request: operations.HealthGetQueueTasksRequest) -> operations.HealthGetQueueTasksResponse:
        r"""Get Tasks Queue
        Get the number of tasks that are waiting to be processed in the Appwrite internal queue server.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/health/queue/tasks"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthGetQueueTasksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 500:
            pass

        return res

    
    def health_get_queue_usage(self, request: operations.HealthGetQueueUsageRequest) -> operations.HealthGetQueueUsageResponse:
        r"""Get Usage Queue
        Get the number of usage stats that are waiting to be processed in the Appwrite internal queue server.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/health/queue/usage"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthGetQueueUsageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 500:
            pass

        return res

    
    def health_get_queue_webhooks(self, request: operations.HealthGetQueueWebhooksRequest) -> operations.HealthGetQueueWebhooksResponse:
        r"""Get Webhooks Queue
        Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/health/queue/webhooks"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthGetQueueWebhooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 500:
            pass

        return res

    
    def health_get_storage_local(self, request: operations.HealthGetStorageLocalRequest) -> operations.HealthGetStorageLocalResponse:
        r"""Get Local Storage
        Check the Appwrite local storage device is up and connection is successful.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/health/storage/local"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthGetStorageLocalResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 500:
            pass

        return res

    
    def health_get_time(self, request: operations.HealthGetTimeRequest) -> operations.HealthGetTimeResponse:
        r"""Get Time
        Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/health/time"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthGetTimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 500:
            pass

        return res

    